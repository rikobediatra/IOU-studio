import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  url: { type: String },
  public_id: { type: String },
});

const SectionSchema = new mongoose.Schema({
  title: String,
  paragraph: String,
  subParagraph: String,
  image: ImageSchema,
});

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String },
    subTitle: String,
    thumbnail: ImageSchema,
    services: [String],
    client: String,
    timeline: String,
    year: Number,
    sections: {
      discover: SectionSchema,
      define: SectionSchema,
      design: SectionSchema,
      deliver: SectionSchema,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);