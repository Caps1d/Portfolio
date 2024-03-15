package main

import (
	"net/http"

	"github.com/Caps1d/Portfolio/ui"
	"github.com/julienschmidt/httprouter"
)

func (app *application) routes() http.Handler {
	router := httprouter.New()

	// httprouter wrapper for the notFound helper
	router.NotFound = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		app.notFound(w)
	})

	// embedded file server handler
	fileServer := http.FileServer(http.FS(ui.Files))
	router.Handler(http.MethodGet, "/static/*filepath", fileServer)

	// routes
	router.HandlerFunc(http.MethodGet, "/", app.home)

	return router
}
