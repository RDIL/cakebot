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
import getRepositoryMetadata from "../../data/remote/github"
import Command from "../commands"
import { makeError } from "../../util/constants"

const Homepage: Command = {
    name: "homepage",
    aliases: ["ghpage"],
    execute(args, message) {
        if (args[0]) {
            getRepositoryMetadata(args[0])
                .then((resp) => {
                    if (resp.repository.homepageUrl) {
                        message.channel.send(
                            `${args[0]}'s homepage is located at ${resp.repository.homepageUrl}`
                        )
                    } else {
                        message.channel.send(
                            makeError(`${args[0]} doesn't have a homepage set!`)
                        )
                    }
                    return
                })
                .catch(() => {
                    message.channel.send(
                        makeError("Unknown repository! Is it public?")
                    )
                })
        } else {
            message.channel.send(makeError("Please specify a repository!"))
        }
    },
}

export default Homepage
