import { data } from "./data";

const trace1 = {
    x: data.data1.x,
    y: data.data1.y,
    mode: 'lines',
    line: {
        width: 0.6,
        color: 'yellow',
        shape: 'vh',
    }
};
const trace2 = {
    x: data.data2.x,
    y: data.data2.y,
    mode: 'lines',
    line: {
        width: 0.6,
        color: '#ff6600',
        shape: 'vh'
    },
};
const trace3 = {
    x: data.data3.x,
    y: data.data3.y,
    mode: 'lines',
    yaxis: 'y2',
    line: {
        width: 0.6,
        color: 'red',
        shape: 'vh'
    }
};
const trace4 = {
    x: data.data4.x,
    y: data.data4.y,
    yaxis: 'y2',
    mode: 'lines',
    line: {
        width: 0.6,
        color: 'violet',
        shape: 'vh'
    }
};
const trace5 = {
    x: data.data5.x,
    y: data.data5.y,
    yaxis: 'y2',
    mode: 'lines',
    line: {
        width: 0.6,
        color: '#0dffff',
        shape: 'vh'
    }
};
const trace6 = {
    x: data.data6.x,
    y: data.data6.y,
    yaxis: 'y2',
    mode: 'lines',
    line: {
        width: 0.6,
        color: '#9900cc',
        shape: 'vh'
    }
};
const trace7 = {
    x: data.data7.x,
    y: data.data7.y,
    yaxis: 'y2',
    mode: 'lines',
    line: {
        width: 0.6,
        color: '#3366ff',
        shape: 'vh'
    }
};

export const dataPlotly = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];