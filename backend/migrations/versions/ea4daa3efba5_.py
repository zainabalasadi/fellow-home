"""empty message

Revision ID: ea4daa3efba5
Revises: 2be67f58fb40
Create Date: 2019-07-23 08:50:56.607061

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ea4daa3efba5'
down_revision = '2be67f58fb40'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('Listing', sa.Column('published', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('Listing', 'published')
    # ### end Alembic commands ###
