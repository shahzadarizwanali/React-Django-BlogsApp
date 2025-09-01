# Fullstack Blog Project

A simple blog platform with a Django REST Framework backend and a React frontend.

---

## Features

- **Backend:**

  - Django REST Framework API for blog posts
  - Only admin/staff can create, update, or delete posts
  - Public can view published posts
  - CORS enabled for frontend integration
  - Custom error handling for API endpoints
  - Automated API tests

- **Frontend:**
  - React UI with Bootstrap styling
  - Navbar with logo, Home, and Contact links
  - Blog post listing with loading/error states
  - Post detail view with image and metadata
  - Footer with social icons and attribution
  - Responsive design

---

## Getting Started

### Backend

1. **Install dependencies:**

   ```sh
   pip install -r requirements.txt
   ```

2. **Apply migrations:**

   ```sh
   python manage.py migrate
   ```

3. **Create a superuser (for admin access):**

   ```sh
   python manage.py createsuperuser
   ```

4. **Run the development server:**

   ```sh
   python manage.py runserver
   ```

5. **Access the admin panel:**  
   Visit [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) to add/edit posts.

### Frontend

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm run dev
   ```

3. **Open the app:**  
   Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## API Endpoints

- `GET /api/posts/` — List all published posts
- `GET /api/posts/<id>/` — Retrieve a single post
- (Staff only) `POST /api/posts/` — Create a post
- (Staff only) `PUT/PATCH/DELETE /api/posts/<id>/` — Update/delete a post

---

## Testing

- **Backend:**  
  Run API tests with:
  ```sh
  python manage.py test blog.tests
  ```
- **Frontend:**  
  (No automated tests yet; manual testing recommended.)

---

## Error Handling

- API returns JSON error responses for API endpoints.
- React UI displays loading and error messages for failed API calls.

---

## Code Structure

- **backend/** — Django project and app code
- **frontend/** — React app (see `src/components/` for UI components)

---

## Attribution

- Made by Shahzada Rizwan Ali
- [Bootstrap](https://getbootstrap.com/), [React](https://react.dev/), [Django REST Framework](https://www.django-rest-framework.org/)

---

## Screenshots

### Blog Home page

![Homepage Screenshot](screenshots/home.jpg)

### Blog Contact Page

![Contact Screenshot](screenshots/contact.jpg)

### Blog Admin Home

![Admin Home Screenshot](screenshots/admin-home.jpg)

### Blog Admin Post

![Admin Post Screenshot](screenshots/admin-post.jpg)

### Blog Admin User

![Admin User Screenshot](screenshots/admin-user.jpg)

---

## License

This project is for educational purposes.
