defineTags = function() {

  let sampleTags = [
    {
      name: "Software Engineering",
      slug: "software-engineering",
      description: "The systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software",
      tagType: "cs-disciplines"
    },
    {
      name: "Psychology",
      slug: "psychology",
      description: "The scientific study of the human mind and its functions, especially those affecting behavior in a given context",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Silicon Valley",
      slug: "silicon-valley",
      description: "the southern portion of the San Francisco Bay Area, centering on the Santa Clara valley.",
      tagType: "locations"
    },
    {
      name: "Data Scientist",
      slug: "data-scientist",
      description: "Combine statistics, data mining, and predictive analytics to gain insight from large data sets.",
      tagType: "professional-goals"
    },
      /* Define four new tags */
    {
      name: "Visualization",
      slug: "visualization",
      description: "Process of representing abstract business or scientific data as images that can aid in understanding the meaning of the data.",
      tagType: "cs-disciplines"
    },
    {
      name: "Professor",
      slug: "professor",
      description: "A teacher especially of the highest rank at a college or university.",
      tagType: "professional-goals"
    },
    {
      name: "Art",
      slug: "art",
      description: "The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Hawaii",
      slug: "hawaii",
      description: "U.S. state that is an isolated volcanic archipelago in the Central Pacific.",
      tagType: "locations"
    }
  ];

  _.each(sampleTags, RadGrad.tag.define);
};