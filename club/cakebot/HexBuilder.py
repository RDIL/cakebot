"""
    Cakebot - A cake themed Discord bot
    Copyright (C) 2019-current year  Reece Dunham
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
"""

from club.cakebot import IntBuilder


class Imp:
    def __init__(self):
        self.c = []

    def __str__(self):
        values = IntBuilder.random_hex()
        for v in values:
            self.c.append(hex(v))

    def __done__(self):
        self.__str__()
        return self.c

def r():
    i = Imp()
    pec = i.__done__()
    return int(float("0x" + pec[0] + pec[1] + pec[2]))
