## Inspiration
Due to COVID meeting new people in person is less of an option, so naturally more people are turning to the digital world to socialize. Sadly meeting new people online is also rather difficult, and it can be hard to find like-minded individuals. People may turn to internet forums on steam or reddit to find new people to play with, however this is tedious and not very helpful. This is where Ringer comes in.

## What it does
Ringer is a node application that centralizes the search for teammates in games. Players fill out a description and pick the games that they play, and our algorithm does it's best to match similar individuals based on the type of player they are and the type of games they play. It then shows you your most related users and allows you to read their description and swipe right or left like in tinder to signify whether you'd be interested in playing with them.

## How we built it
Ringer is built using the MERN stack (MongoDB, Express.js, React, and Node). The node backend supports the Express routes that facilitate the movement of data around the application, with user-data being stored in MongoDB, and React supplying this data in a useable format to users. The main algorithm combines sentiment analysis on the users description, and a matching formula on the users games to quantify a "relatedness" score, which if it reaches a certain threshold will be shown to the user.

## Challenges we ran into
Going into this project machine learning was still sort of a black box to all of us, and while we knew we wanted to use some sort of sentiment analysis we didn't exactly know how. We ended up creating a pretty bad model, and then switching to Google's sentiment analysis tool on their cloud platform but since we didn't really have a lot of data for our use case the model was pretty inaccurate. This is also the biggest project any of us has done on a web platform, so we spent a lot of time trying to visualize how everything would fit together. Low and behold this left us with not a ton of time to work on actually putting everything together so our front-end is unfinished. We think given a lot more users providing descriptions, more knowledge in machine learning, and more time we could create a well functioning product that would serve this need very well.

## Accomplishments that we're proud of
We're happy that we got a good portion of this project working. While we didn't really get to see it through, we're happy we got exposed to more machine learning, and we can say we came away from this competition with a better understanding of sentiment analysis and perhaps some more cool use cases for it.

## What we learned
We learned the valuable lesson that things that seem easy on paper and in your head, don't always turn out that way. Complexity adds up quickly. While we did run into quite a few problems along the way we're walking away with a lot of experience in the web development department

## What's next for Ringer
If we can get a well functioning algorithm working this project would actually be quite useful. As we said in the video a chat feature would also be neat. The main thing is we just don't have enough data to properly test our program, but we would love to see Ringer grow into something not only useful to us as a learning experience but to a broad range of people.


