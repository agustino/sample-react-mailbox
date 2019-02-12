# Submission

## Description of approach

For a cutting-edge implementation I would have choosen a Rails-Framework with a classic frontend setup. This specifications invited to go with a tdd aproach and I decided to be as minimalisic as possible. Therefore I choose to write a reactjs prototype without any create-react-app script.

1.) I started by translating all specs to test files, to be sure the prototype meets all the specifications.

2.) For every component I wrote a boilerplate, starting with MailboxNavigation and MailboxEntry.

3.) After tests passed, I setup a webpack environment and build a Mailbox component to see the results. At this point I realized the app needs some improvements.

## Production-ready System

My priority was meeting the specs.

For a production-ready system I would have choosen to work with a database. Instead of a raw JSON string I would have used fetch to request and update the data.
Insted of deleteing by state and passing the handler as a prop, I would have removed the entry from the props.messages.

Styling was not the focus. I would have used at least the resets of the context application. Probably even made use of a frontend framework and prefered BEM or styled components. But more importantly, I would have used the same conventions like the context application.
