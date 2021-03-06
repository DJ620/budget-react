import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import StatisticGroup from "./StatisticGroup";

function DisplayBalances({ incomeTotal, expenseTotal }) {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <StatisticGroup
                            size="tiny"
                            color="green"
                            textAlign={{textAlign: "left"}}
                            label="Income:"
                            value={incomeTotal}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <StatisticGroup
                            size="tiny"
                            color="red"
                            textAlign={{textAlign: "left"}}
                            label="Expenses"
                            value={expenseTotal}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances;
