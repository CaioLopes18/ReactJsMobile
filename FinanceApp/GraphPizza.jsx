import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const PizzaGraph = (props) => {
    const data = props.list || []; // Certifica-se de que 'list' não seja undefined

    // Função para converter valor para número, tratando vírgula como decimal
    const convertToNumber = (value) => {
        return parseFloat(value.replace(',', '.'));
    };

    // Função para agrupar e somar os valores por tipo
    const sumValuesByType = (data) => {
        const sums = {};
        data.forEach(item => {
            const type = item.type.toLowerCase(); // Trata o tipo como minúsculo para normalizar
            const value = convertToNumber(item.value);
            sums[type] = sums[type] ? sums[type] + value : value;
        });
        return sums;
    };

    // Estado para armazenar os totais somados por tipo
    const [summedData, setSummedData] = useState(null);

    // Atualiza summedData quando data muda
    useEffect(() => {
        if (data.length > 0) { // Garante que 'data' não seja vazio
            const summed = sumValuesByType(data);
            setSummedData(summed);
        }
    }, [data]);

    // Definindo até 10 cores diferentes para categorias
    const colors = [
        '#FF6347', '#00BFFF', '#7FFF00', '#FFD700', '#FF1493',
        '#20B2AA', '#FFA500', '#8A2BE2', '#32CD32', '#1E90FF'
    ];

    // Converte dados somados para o formato necessário pelo PieChart
    const chartData = summedData
        ? Object.keys(summedData).map((type, index) => ({
              name: type,
              population: summedData[type],
              color: colors[index % colors.length] // Usa as cores definidas, repetindo se houver mais categorias que cores
          }))
        : [];

    return (
        <View style={styles.container}>
            <PieChart
                data={chartData}
                width={380}
                height={200}
                chartConfig={{
                    backgroundGradientFrom: '#1E2923',
                    backgroundGradientTo: '#08130D',
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PizzaGraph;
