Videos = new Mongo.Collection("videos");
Comments = new Mongo.Collection("comments");

var UploadedVideos = new FS.Collection("uploadedVideos", {
  stores: [new FS.Store.FileSystem("uploadedVideos", {path: "~/uploads"})]
});
