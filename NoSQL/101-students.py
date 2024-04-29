def top_students(mongo_collection):
    """
    Returns all students sorted by average score.
    :param mongo_collection: pymongo collection object
    :return: List of dictionaries containing students sorted by average score
    """
    pipeline = [
        {"$unwind": "$topics"},
        {"$group": {"_id": "$_id", "name": {"$first": "$name"}, "averageScore": {"$avg": "$topics.score"}}},
        {"$sort": {"averageScore": -1}}
    ]

    top_students = list(mongo_collection.aggregate(pipeline))

    for student in top_students:
        student["_id"] = str(student["_id"])

    return top_students
