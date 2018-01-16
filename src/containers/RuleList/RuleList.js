import React from 'react';

import RuleComponent from './RuleComponent/RuleComponent';
import rules, { testObj } from '../../rule-data';
import { sortByRuleId, ruleBodyToFunction } from '../../rule-service';

// Importing sass files
import styles from './RuleList.scss';

class RuleList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            openPanel: rules[0].id,
            statusOfRules: []
        };

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle = (ruleId) => {
        this.setState({ openPanel: ruleId});
    };

    prepareStatusOfRules = (ruleId, status) => {
        let statusOfRules = this.state.statusOfRules;
        statusOfRules[ruleId] = status;
        return statusOfRules;
    };

    helperRecursion = (rule) => {
        let execFunc = ruleBodyToFunction(rule);
        if (execFunc !== null && execFunc(testObj)) {
            this.setState({ statusOfRules: this.prepareStatusOfRules(rule.id, 'success') });
            if (rule.true_id) this.helperRecursion(sortByRuleId(rule.true_id));
            else return false;
        } else {
            this.setState({ statusOfRules: this.prepareStatusOfRules(rule.id, 'danger') });
            if (rule.false_id) this.helperRecursion(sortByRuleId(rule.false_id));
            else return false;
        }
    };

    componentDidMount = () => {
        this.helperRecursion(rules[0]);
    };

    render() {
        const addRule = (rule) => {
            return (
                <RuleComponent
                    handleToggle={this.handleToggle}
                    key={rule.id}
                    rule={rule}
                    openPanel={this.state.openPanel}
                    statusOfRules={this.state.statusOfRules}
                />
            );
        };

        return(
            <div className={styles.wrapper}>
                <ul className={styles.ruleList}>
                    {rules.map(addRule, this)}
                </ul>
            </div>
        )
    }
}

export default RuleList;