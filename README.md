This repository demonstrates a common error encountered in Next.js 15 applications when using the `useSearchParams` hook.  The error, `ReferenceError: useSearchParams is not defined`, arises because `useSearchParams` is part of the `next/navigation` package, requiring proper import and usage. This repository provides a solution to resolve this issue.

**Steps to Reproduce:**
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Observe the error in the browser console. 

**Solution:**
The solution involves correctly importing and utilizing the `useSearchParams` hook, including the necessary packages. The solution file demonstrates the correct implementation. 