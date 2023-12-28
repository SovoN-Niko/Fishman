from sqlalchemy.future import select
from app.model import Users, Person
from app.config import db


class UserService:
    @staticmethod
    async def get_user_profile(username: str):
        query = (
            select(
                Users.username,
                Users.email,
                Person.name,
                Person.birth,
                Person.profile,
                Person.phone_number,
            )
            .join_from(Users, Person)
            .where(Users.username == username)
        )
        result = await db.execute(query)
        user_data = dict(result.mappings().first())

        return user_data
