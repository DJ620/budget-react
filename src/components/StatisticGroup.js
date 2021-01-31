import React from 'react';
import { Statistic } from "semantic-ui-react";

function StatisticGroup(props) {
    return (
        <Statistic size={props.size} color={props.color}>
            <Statistic.Label style={props.textAlign}>
                {props.label}
            </Statistic.Label>
            <Statistic.Value>{props.value}</Statistic.Value>
        </Statistic>
    )
}

export default StatisticGroup;
