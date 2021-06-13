# React Query Firs Look

---

## description

: this project is only for learning purposes which is learning `react-query` library.

---

### Techs:

1. React
2. React Query

---

### Resources:

- [NetNinga Youtube Channel](https://www.youtube.com/watch?v=QwF7-K106eQ&list=PL4cUxeGkcC9jpi7Ptjl5b50p9gLjOFani&index=4&ab_channel=TheNetNinjaTheNetNinjaVerified)

- [React Query Library Docs](https://react-query.tanstack.com/overview)

### Issues:

- React Query Devtools, there is an issue when you are using `react-query-devtools` library at the leatest version of `react-query` library it causes an error.
- you have to use `QueryClientProvider` and `QueryClient` surrounded the `App` root component in the `index.js` file like this:
  ```
   const client = new QueryClient();
   <QueryClientProvider client={client}>
   <App />
   <QueryClientProvider>
  ```

### how to run the project:

- clone the project or download it as zip folder.
- open the project via your terminal.
- run these commands:
  - `yarn` or `npm install`.
  - `yarn start` or `npm start`
- it will open the project automaticaly in your default browesr and if not open it in this URL `http://localhost:3000`.
