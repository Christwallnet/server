/**
 * @copyright 2021 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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

import axios from '@nextcloud/axios'
import { getCurrentUser } from '@nextcloud/auth'
import { generateOcsUrl } from '@nextcloud/router'
import confirmPassword from '@nextcloud/password-confirmation'

/**
 * Save the visibility of the profile parameter
 *
 * @param {string} paramId the profile parameter ID
 * @param {string} visibility the visibility
 * @returns {object}
 */
export const saveProfileParameterVisibility = async(paramId, visibility) => {
	const userId = getCurrentUser().uid
	const url = generateOcsUrl('/profile/{userId}', { userId })

	await confirmPassword()

	const res = await axios.put(url, {
		paramId,
		visibility,
	})

	return res.data
}

/**
 * Save the default profile enabled state
 *
 * @param {string} isEnabled the default state
 * @param {string} forceChangeExistingUsers whether to force change this setting for existing users
 * @returns {object}
 */
export const saveDefaultEnableProfile = async(isEnabled, forceChangeExistingUsers) => {
	// TODO allow boolean values on backend route handler
	// Convert boolean to string for compatibility
	if (typeof isEnabled === 'boolean') {
		isEnabled = isEnabled ? '1' : '0'
	}

	const url = forceChangeExistingUsers
		// TODO test v2
		// TODO create route handler to force change existing users
		? generateOcsUrl(
			'/apps/provisioning_api/api/v2/config/apps/{appId}/{key}', {
				appId: 'settings',
				key: 'profile_default_enabled',
			})
		: generateOcsUrl(
			'/apps/provisioning_api/api/v2/config/apps/{appId}/{key}', {
				appId: 'settings',
				key: 'profile_default_enabled',
			})

	await confirmPassword()

	const res = await axios.post(url, {
		value: isEnabled,
	})

	return res.data
}
