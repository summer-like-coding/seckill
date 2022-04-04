const mm = [
  ['and', '且'],
  ['or', '或'],
  ['gt', '大于'],
  ['lt', '小于'],
  ['ge', '大于等于'],
  ['le', '小于等于'],
  ['eq', '等于'],
  ['ne', '不等于'],
  ['true', '是'],
  ['false', '否'],
  ['contains', '包括'],
  ['notcontains', '不包括'],
  ['null', '空值']
]

const mmm = mm.reduce((acc, cur) => {
  acc[cur[0]] = cur[1]
  acc[cur[1]] = cur[0]
  return acc
}, {})

module.exports = {
  op: [
    '或',
    '且'
  ],
  expressionOp: [
    '>',
    '<',
    '>=',
    '<=',
    '=',
    '!='
  ],
  relationMap: {
    and: '且',
    or: '或'
  },
  opMap: [
    {
      'Integer': [
        '大于',
        '小于',
        '大于等于',
        '小于等于',
        '等于',
        '不等于'
      ],
      'Double': [
        '大于',
        '小于',
        '大于等于',
        '小于等于',
        '等于',
        '不等于'
      ],
      'Boolean': [
        '等于'
      ],
      'String': [
        '大于',
        '小于',
        '大于等于',
        '小于等于',
        '等于',
        '不等于'
      ],
      'List.String': [
        '等于',
        '包括',
        '不包括'
      ]
    },
    [
      '且',
      '或'
    ]
  ],
  m: mmm,
  ruleVersion: 1
}
