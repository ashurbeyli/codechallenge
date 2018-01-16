import rules from './rule-data';

export const sortByRuleId = (ruleId) => {
    return rules.find(function (rule) {
        return rule.id === ruleId;
    })
};

export const ruleBodyToFunction = (rule) => {
    /*eslint no-new-func: 0*/
    let funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
    let match = funcReg.exec(rule.body.replace(/\n/g, ' '));
    if(match) {
        return new Function(match[1].split(','), match[2]);
    }
    return null;
};