"""test

Revision ID: f1170787121a
Revises: 0c72783fb919
Create Date: 2023-12-25 14:07:05.028998

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'f1170787121a'
down_revision: Union[str, None] = '0c72783fb919'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('role', 'id',
               existing_type=sa.VARCHAR(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('role', 'id',
               existing_type=sa.VARCHAR(),
               nullable=False)
    # ### end Alembic commands ###