# FROM ubuntu

# RUN apt-get update
# RUN apt-get install -y python3-pip
# RUN pip install flask

# COPY app.py /opt/app.py

# ENTRYPOINT FLASK_APP=app.py flask run --host=0.0.0.0
FROM python:3.8

RUN python3 -m pip install flask
RUN mkdir /app
WORKDIR /app
COPY app.py /app
ENV FLASK_APP=app.py
CMD ["flask", "run", "--host=0.0.0.0"]