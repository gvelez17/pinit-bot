/**
 * @file Sample Trigger command.
 * @author Naman Vrati
 * @since 2.0.0
 * @version 3.2.2
 */

// For now, the only available property is name array. Not making the name array will result in an error.

/**
 * @type {import('../../typings').TriggerCommand}
 */
module.exports = {
	name: ["todo", "TODO"],

	execute(message, args) {
		// Put all your trigger code over here. This code will be executed when any of the element in the "name" array is found in the message content.
        const provide_did = import('../../packages/use-composites/provide_did.js');
        const ComposeClient = import("@composedb/client");
        ComposeClient.setDID(provide_did.get_did());
		message.channel.send({
			content: "Gotcha - will remind you",
		});

		ComposeClient.executeQuery("TODO some query to save the message")

	},
};
