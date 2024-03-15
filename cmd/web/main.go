package main

import (
	"log"
	"net/http"
	"os"

	"github.com/Caps1d/Portfolio/internal/config"
)

type application struct {
	cfg      *config.Config
	infoLog  *log.Logger
	errorLog *log.Logger
}

func main() {
	cfg := config.NewConfig()

	// levelled logging
	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stderr, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	app := &application{
		cfg:      &cfg,
		infoLog:  infoLog,
		errorLog: errorLog,
	}

	// Setup server
	srv := &http.Server{
		Addr:     cfg.Addr,
		ErrorLog: errorLog,
		Handler:  app.routes(),
	}

	err := srv.ListenAndServe()
	errorLog.Fatal(err)
}
