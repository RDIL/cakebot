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
import Trace from "../data/tracing"

describe("command tracing functionality", () => {
    it("properly retains trace properties", () => {
        const t = new Trace(
            "fake-command",
            ["hello", "world"],
            "DiscordUser#1234"
        )

        expect(t.command).toBeDefined()
        expect(t.command).toBe("fake-command")

        expect(t.args).toBeDefined()
        expect(t.args).toStrictEqual(["hello", "world"])

        expect(t.user).toBeDefined()
        expect(t.user).toBe("DiscordUser#1234")
    })

    it("toString output doesn't unexpectedly change", () => {
        const t = new Trace(
            "fake-command-2",
            ["my", "things", "yes"],
            "DiscordUser2#5678"
        )

        expect(t.toString()).toMatchSnapshot()
    })
})