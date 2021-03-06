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
import Command from "../commands"
import { makeError } from "../../util/constants"

const Clapify: Command = {
    name: "clapify",
    aliases: ["clap"],
    execute(args, message) {
        if (args.length < 2) {
            message.channel.send(
                makeError("You didn't tell me what to add claps to!")
            )
            return
        }

        message.channel.send(
            args
                .join(" :clap: ")
                .replace("@everyone", "")
                .replace("@here", "")
                .replace("@", "")
        )
    },
}

export default Clapify
