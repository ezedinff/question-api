const getQuery = (topic) => [
    {
        $match: {
            $or: [
                { _id: topic },
                { ancestors: { $in: [topic] } }
            ]
        }
    },
    {
        $group: {
            _id: null,
            ancestors: {
                $push: '$_id'
            }
        }
    },
    {
        $project: {
            _id: 0,
            ancestors: 1
        }
    },
    {
        $lookup: {
            from: 'questions',
            foreignField: 'annotations',
            localField: 'ancestors',
            as: 'questions'
        }
    },
    {
        $project: {
            questions: {
                $map: {
                    input: '$questions',
                    as: 'question',
                    in: '$$question.question_number'
                },
            },
        }
    }
];
module.exports = getQuery;