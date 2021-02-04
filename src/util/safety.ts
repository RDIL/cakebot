/**
 * Cakebot - A fun and helpful Discord bot
 * Copyright (C) 2021-current year  Reece Dunham
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
// anything that can possibly be harmful to the query
const removes = [
    "\\",
    "`",
    `"`,
    "'",
    "{",
    "}",
    "*",
    "%",
    "$",
    "@",
    "!",
    "[",
    "]",
    "(",
    ")",
    ":",
]

/**
 * Strips any characters from an input in a GraphQL query that could be harmful.
 * @param input The input for the query.
 * @returns The sanitized version of the input.
 */
export function sanitizeGraphQL(input: string): string {
    let inp = input

    removes.forEach((remove) => {
        inp = inp.replace(remove, "")
    })

    return inp
}
