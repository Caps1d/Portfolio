package config

type Config struct {
	Addr      string
	StaticDir string
}

func NewConfig() Config {
	var cfg Config

	cfg.Addr = ":3000"
	cfg.StaticDir = "./ui/static"

	return cfg
}
