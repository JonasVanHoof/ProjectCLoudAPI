FROM microsoft/dotnet:aspnetcore-runtime

WORKDIR /usr/local/API

COPY ./RestAPI/out/ .

ENTRYPOINT [ "dotnet", "RestAPI.dll" ]