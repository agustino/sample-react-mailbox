# Submission

## Description of approach

For a cutting-edge implementation I would have choosen a Rails-Framework with a classic frontend setup. This specifications invited to go with a tdd aproach and I decided to be as minimalisic as possible. Therefore I choose to write a reactjs prototype without any create-react-app script.

1. ) I started by translating all specs to test files, to be sure the prototype meets all the specifications.

2.) For every component I wrote a boilerplate, starting with MailboxNavigation and MailboxEntry.

3.) After tests passed, I setup a webpack environment and build a Mailbox component to see the results. At this point I realized the app needs some improvements.

## Production-ready System

For a production-ready system I would have choosen to work with a real database. Instead of a raw JSON string I would have used fetch to request and update the data.

Styling was not the focus. I would have used at least the resets of the context application. Probably even made use of a frontend framework and make a choice for BEM or styled components. But more important, I would have used the same conventions like the context application.
