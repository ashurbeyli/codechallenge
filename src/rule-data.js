const rules = [
    {
        id: 1,
        body: 'function (obj) { return obj; }',
        true_id: 2,
        false_id: 3
    },
    {
        id: 2,
        body: 'function (obj) { return !obj; }',
        true_id: 4,
        false_id: 3
    },
    {
        id: 3,
        body: 'function (obj) { return obj; }',
        true_id: 4,
        false_id: null
    },
    {
        id: 4,
        body: 'function (obj) { return !obj; }',
        true_id: null,
        false_id: null
    }
];
export const testObj = 23;

export default rules;