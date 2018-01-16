import React from 'react';

import PropTypes from 'prop-types';

// Importing sass files
import styles from './RuleComponent.scss';

class RuleComponent extends React.Component {
    render() {
        const {rule, statusOfRules} = this.props;
        return (
            <li
                className={
                    styles.rule + ' ' +
                    (this.props.openPanel === rule.id ? styles.open : '') + ' ' +
                    styles[statusOfRules[rule.id]]
                }
                key={rule.id}
                onClick={() => { this.props.handleToggle(rule.id) }}
            >
                <a>
                    <div>{rule.id}</div>
                    Rule title
                </a>
                <div className={styles.content}>
                    <div className={styles.areaLabel}>Rule body</div>
                    <div className={styles.areaBody}>{rule.body}</div>
                    <div className={styles.row}>
                        <div className={styles.halfRow}>
                            <div className={styles.areaLabel}>Next rule-id if passed</div>
                            <div className={styles.areaBody}>{rule.true_id ? rule.true_id : 'null'}</div>
                        </div>
                        <div className={styles.halfRow}>
                            <div className={styles.areaLabel}>Next rule-id if failed</div>
                            <div className={styles.areaBody}>{rule.false_id ? rule.false_id : 'null'}</div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

RuleComponent.propTypes = {
    'rule': PropTypes.object.isRequired,
};

export default RuleComponent;