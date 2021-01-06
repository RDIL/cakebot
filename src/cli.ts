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
import commander from "commander"
import { config as configureEnvironment } from "dotenv"
import { banner } from "./util/constants"

configureEnvironment()

console.log(banner)

// prepopulate data
import "./data/runtime-data"
import start from "."

commander.name("Cakebot")

commander.command("run").description("Run the bot.").action(start)

commander.parse(process.argv)
