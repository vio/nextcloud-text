/*
 * @copyright Copyright (c) 2021 Jonas Meurer <jonas@freesources.org>
 *
 * @author Jonas Meurer <jonas@freesources.org>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { Extension } from '@tiptap/core'

const Emoji = Extension.create({

	get name() {
		return 'emoji'
	},

	addCommands() {
		return {
			emoji: (emoji) => ({ commands }) => {
				return commands.insertContent(emoji)
			},
		}
	},

})

export default Emoji
