# PenPals

## Table of contents

- [](#)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Intro Video](#intro-video)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)

## General Info

Penpals is a student website designed to connect people all over the world through the physical mail system. This site allows users to create a profile, become a penpal, and keep track of who they have sent letters to. 

## Intro Video

[Mod 3 Flatiron Project by Bob Whitmer](https://youtu.be/PoxeLCi_3M8)

## Technologies

* Ruby - version 2.6.1
* Rake - 13.0
* ActiveRecord - version 6.0
* SQLite3 - version 1.4
* JWT
* JavaScript
* HTML
* CSS

## Setup

To run this project, clone the GitHub repository, install it locally, and type:
```bundle install```into your terminal while in the BEpenpals directory of your local repository.
Then, type ```rails db:migrate``` to set up the database.
After, type ```rails s``` to start the back end server.
Then, to start the front end server, type
```lite-server```into your terminal while in the FEpenpals directory.

## Code Examples

Keep track of the number of letters you sent to your penpal:
```JavaScript
function sendALetter(event){
    event.preventDefault()
    const letterCounterNode = event.currentTarget.parentNode
    const letterCounter = letterCounterNode.querySelector('#letter-counter')
    letterCounter.textContent = +(letterCounter.textContent) + 1
    fetch((penpalURL+event.target.value), {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            letters_received: letterCounter.textContent
        })
    })
}
```

Authentication method:
```ruby
def authenticate
        header = request.headers["Authorization"]
        token = header.split(" ")[1]
        if !token
            render json: { error: 'Must be logged in to do this!!' }, stauts: :unauthorized
        else 
            secret = Rails.application.secret_key_base
            
            begin
                payload = JWT.decode(token, secret)[0]
                
                @user = User.find(payload["user_id"])

            rescue
                render json: { error: 'Must be logged in to do this!' }, status: :forbidden
            end
        end
    end
```

## Features

* Creates new users
* Creates penpals
* Creates user relationships with penpals
* All users become penpals automatically
* Full auth with login and logout capabilitites

## To-do List

* Refactor “code smell”
* Remove penpals from a logged in user
* Allow picture upload for new users
* Integrate map functionality

## Status

Project is: finished with option to expand functionality and DRY out code.

## Inspiration

I love getting real letters in the mail, so I wanted to connect people who also enjoy sending and receiving letters.

## Contact

Created by [Bob Whitmer](https://www.linkedin.com/in/bob-whitmer-b7269248/)
Feel free to contact me!
