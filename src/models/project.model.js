import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
  title: String,
  paragraph: String,
  subParagraph: String,
  image: String,
});

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String },
    subTitle: String,
    thumbnail: String,
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