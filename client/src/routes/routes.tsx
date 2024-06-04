import { DashboardLayout, RootLayout } from '@/layouts'
import {
  About,
  BookDetails,
  Books,
  Contact,
  Ebook,
  Ebooks,
  Error,
  Home,
} from '@/pages'
import {
  AddBook,
  AddEbook,
  ManageBooks,
  ManageEbooks,
  Profile,
  UpdateBook,
  UpdateEbook,
} from '@/pages/Dashboard'
import { createBrowserRouter } from 'react-router-dom'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'ebooks',
        element: <Ebooks />,
      },
      {
        path: 'ebook/:id',
        element: <Ebook />,
      },
      {
        path: 'books',
        element: <Books />,
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
      },
    ],
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard/home',
        element: <Home />,
      },
      {
        path: 'dashboard/profile',
        element: <Profile />,
      },
      {
        path: 'dashboard/add-book',
        element: <AddBook />,
      },
      {
        path: 'dashboard/add-ebook',
        element: <AddEbook />,
      },
      {
        path: 'dashboard/manage-books',
        element: <ManageBooks />,
      },
      {
        path: 'dashboard/manage-ebooks',
        element: <ManageEbooks />,
      },
      {
        path: 'dashboard/update-book/:id',
        element: <UpdateBook />,
      },
      {
        path: 'dashboard/update-ebook/:id',
        element: <UpdateEbook />,
      },
    ],
  },
])
