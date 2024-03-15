package main

import "net/http"

func (app *application) home(w http.ResponseWriter, r *http.Request) {
	app.infoLog.Println("Home enpoint reached")

	w.Write([]byte("Hello, welcome to my portfolio!"))
}
