# Frontend Assignment 2023

## "What to Order" Assignment 

### Task 1 API Gateway

Normally Software Engineer, Frontend at LINE MAN Wongnai will be responsible for Web application and API Gateway, which is the single entry point for all clients and composition of microservices in our infrastructure.

In this task, you have to develop an API Gateway to retrieve data from the provided JSON Data, with the requirement discussed in the next section.

#### Requirements

**Create API Gateway by using Typescript**

- [ ] Create various endpoints and send data back so that the web can be displayed according to the design that is defined correctly.
- [ ] Write a unit test for each endpoint created and ensures that each endpoint is always available and working properly


#### Extra Requirements

- [ ] Make sure each endpoint has good performance and can respond quickly.

#### JSON Data Spec

- Restaurant `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/:restaurantId.json`

```
{
 "name": string
 "id": number
 "coverImage": string
 "menus: string[]
 "activeTimePeriod": {
    open: string
    close: string
  }
}
```

| Field | Description |
| ------ | ------ |
| name | Restaurant Name |
| id | Restaurant ID |
| coverImage | Restaurant Cover Photo |
| menus | Restaurant Menus |
| activeTimePeriod.open | Restaurant Opening Hour |
| activeTimePeriod.close | Restaurant Closing Hour |

- Short Menu `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/:restaurantId/menus/:menuName/short.json`

```
{
 "name": string
 "id": string
 "thumbnailImage"?: string
 "fullPrice": number
 "discountedPercent": number
 "discountedTimePeriod"?: {
    "begin": string
    "end": string
  }
 "sold": number
 "totalInStock": number
}
```

| Field | Description |
| ------ | ------ |
| name | Menu |
| id | Menu ID |
| thumbnailImage | Menu Cover Photo |
| fullPrice | Menu Price |
| discountedPercent | Menu Discount Percentage |
| discountedTimePeriod.begin | Discount Starting Time |
| discountedTimePeriod.end | Discount Ending Time |
| sold | Number of Menu Sold |
| totalInStock | Number of Menu Total Stock |

- Full Menu `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/:restaurantId/menus/:menuName/full.json`

```
{
 "name": string
 "id": string
 "thumbnailImage"?: string
 "fullPrice": number
 "discountedPercent": number
 "discountedTimePeriod"?: {
    "begin": string
    "end": string
  }
 "sold": number
 "totalInStock": number
 "largeImage"?: string
 "options": {
    "label": string
    "choices": {
      "label": string
    }[]
  }[]
}
```

| Field | Description |
| ------ | ------ |
| name | Menu |
| id | Menu ID |
| thumbnailImage | Menu Cover Photo |
| fullPrice | Menu Price |
| discountedPercent | Menu Discount Percentage |
| discountedTimePeriod.begin | Discount Starting Time |
| discountedTimePeriod.end | Discount Ending Time |
| sold | Number of Menu Sold |
| totalInStock | Number of Menu Total Stock |
| largeImage | Large Menu Photo |
| options[].label | Header Section of Menu Options Ex. Choose the type of meat |
| options[].choices[].label | Choice of Menu Options Ex. Pork, Chicken |

We have prepared an API Server, https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api, for your API Gateway to be developed.

There are 2 restaurants with the following ID:

- 567051 (ร้านลืมเคี้ยว)
- 227018 (Ekkamai Macchiato - Home Brewer)

### Task 2 React Web Application

![](https://i.imgur.com/Xb7v6YT.png)

Creating a web application is the main job that Software Engineer, Frontend at LINE MAN Wongnai is passionate about. Our core web technology is React.

In this task, we need to create a React web application for reading menus when going to a restaurant. To help our users reduce the risk of spreading COVID-19 by ordering food at the restaurant without touching the menu book.

For a better application, we always think about User Experience (UX) by allowing the web application to be added and modified differently from the design provided to improve the UX/UI of the website.

#### Requirements

**Create Web Application by using React and Typescript**

Create a web application for displaying menus with good UX in mind. Users will feel that using menus through this website is more comfortable than using a menu book on a dining table. By connecting your web application to the API Gateway that you created in task 1 to bring the data to display and create various features as specified

The web application must be able to perform all of the following features:

- [ ] Display details of each menu correctly
- [ ] Display restaurant detail correctly
- [ ] Can be used well on all screen sizes such as Desktop, Tablet, or Smartphone

And to control the quality of the code that will be sent to the user, we will need to do the following:

- [ ] Write a unit test to ensure that all features are working properly.

Our main focus is to provide convenience to users. You can freely add other features in addition to the features mentioned above to create a better user experience and increase sales for the restaurant that uses your web application.

#### Extra Requirements

This is the part that if we do, it will help the UX even better.

- [ ] Displays the discount for a period of time UI to increase user motivation in purchasing decisions
- [ ] Displays the popular menu UI for the top sales menu to increase user motivation in purchasing decisions
- [ ] Make your website faster, even with a lot of images and data that need to be loaded.

### Grading Criteria

- [ ] Website can work properly according to all requirements mentioned above.
- [ ] Proficiency in Javascript, Typescript, and React
- [ ] Good Developer Experience, Is the written code difficult to develop in the future?
- [ ] Website performance
- [ ] Website has good UX/UI, and users can use the website smoothly.
 
###  Run project

We have already an initial project for API Gateway and Web application. You have to develop both API Gateway and Web application based on all the tasks mentioned above. We will run the project you submitted by using this script, please make sure this script can run both projects at the root folder correctly.

1. install all dependencies
```
yarn
```

2. run web and API Gateway in parallel
```
npx lerna run dev --parallel
```
