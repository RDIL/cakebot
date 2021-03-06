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
import chalk from "chalk"

/**
 * Used to give our errors actual context, so we can
 * contact the person who caused it for more details if need be.
 */
export default class Trace {
    private readonly command: string
    private readonly args: readonly string[]
    private readonly user: string

    /**
     * Creates a new instance of the trace class.
     * @param command The command that was run.
     * @param args The arguments the command was run with.
     * @param user The display name (User#1234) of the user who run the command.
     */
    public constructor(command: string, args: readonly string[], user: string) {
        this.command = command
        this.args = args
        this.user = user
    }

    /**
     * Returns a string representation of the trace object (made for console, contains color characters).
     * @returns The string.
     */
    public toString(): string {
        return chalk`[{blue User:} ${this.user}] [{blue Command:} ${
            this.command
        }] [{blue Arguments}]: ${this.args.join(" ")}`
    }
}
