import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

type Props = {
    labels: string[];
    data: number[];
};

export default function RadarChart({ labels, data }: Props) {

    // 🎯 1. Definir qué grupos mostrar y cómo renombrarlos
    const groupMap: Record<string, string> = {
        'Frontend': 'Front',
        'Backend': 'Back',
        'DevOps & Cloud': 'Cloud',
        'Core': 'Core',
        'Integración & Arquitectura': 'Integraciones',
        'Testing & Calidad': 'Testing',
    };

    const allowedGroups = ['Frontend', 'Backend', 'DevOps & Cloud', 'Core', 'Integración & Arquitectura']; // 👈 control total

    // 🎯 2. Filtrar y transformar
    const filtered = labels
        .map((label, i) => ({
            label,
            value: data[i]
        }))
        .filter(item => allowedGroups.includes(item.label));

    const finalLabels = filtered.map(item => groupMap[item.label] ?? item.label);
    const finalData = filtered.map(item => item.value);

    const chartData = {
        labels: finalLabels,
        datasets: [
            {
                label: '', // ❌ quitamos "Skill Level"
                data: finalData,
                fill: true,
                backgroundColor: '#BFFF0033', // 20% opacity
                borderColor: '#BFFF00',
                pointBackgroundColor: '#BFFF00'
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false // ❌ elimina completamente la leyenda
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    display: false // ❌ oculta números (0,20,40...)
                },
                grid: {
                    circular: true
                },
                pointLabels: {
                    font: {
                        size: 12,
                        weight: 'bold' as const
                    }
                }
            }
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
            <Radar data={chartData} options={options} />
        </div>
    );
}