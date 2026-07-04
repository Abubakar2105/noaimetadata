from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    ENVIRONMENT: str = "production"

    model_config = {"env_file": ".env.local", "extra": "ignore"}


settings = Settings()