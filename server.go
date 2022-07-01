package main

import (
	"html/template"
	"io"
	"mime/multipart"
	"net/http"

	"github.com/labstack/echo/v4"
)

type Users struct {
	Email  string          `json:"email" form:"email" validate:"required,email"`
	Nama   string          `json:"nama" form:"nama" validate:"required"`
	Umur   int             `json:"umur" validate:"gte=0"`
	Alamat string          `json:"alamat"`
	Foto   *multipart.File `json:"foto" form:"foto"`
}

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func main() {
	route := echo.New()
	t := &Template{
		templates: template.Must(template.ParseGlob("views/webpack/public/*.html")),
	}
	route.Renderer = t
	fs := http.FileServer(http.Dir("views/webpack/public"))
	route.GET("/public/*", echo.WrapHandler(http.StripPrefix("/public/", fs)))

	echo.NotFoundHandler = func(c echo.Context) error { // force direct to index.html
		return c.Render(http.StatusOK, "index.html", "")
	}

	route.Start(":8080")
}
