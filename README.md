# OSAI: Open and Sustainable AI Ecosystem Components List

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15391274.svg)](https://doi.org/10.5281/zenodo.15391274)

Welcome to the **OSAI Ecosystem Components List**! This repository hosts a community-curated list of AI-relevant components useful for AI research. Our aim is to connect researchers developing AI models and datasets with resources that are FAIR, Open, and environmentally sustainable.

Our goal is to provide a centrally curated list for discovering relevant AI resources such as tools, registries, metadata standards, AI best practice frameworks, and more. We have used this collection to map components to our **OSAI Recommendations**, thereby helping to connect researchers with practical resources for AI model and dataset sharing. We understand that the **OSAI Recommendations** designed for life sciences may not be adopted by all organizations, but we believe this list of ecosystem components itself will be highly valuable. Therefore, this list is intended for researchers, developers, policymakers, educators, students, and anyone interested in the field of Open and Sustainable AI to reuse and adapt for their own needs, such as by remapping the components to different frameworks.

---

## OSAI Ecosystem Components: Background and Purpose

This list originates from an upcoming publication by members of the **ELIXIR Machine Learning Focus Group**. It represents a collective effort to identify and map key components supporting the **OSAI Recommendations** within the life sciences.

**Digital Object Identifier (DOI):** TBC - upon preprint.

The primary goal of this list is to serve as a dynamic, community-maintained inventory. It is explicitly **designed for reuse and adaptation**. We envision this list feeding into various resources, frameworks, and platforms, providing a long-term, accessible collection of OSAI ecosystem components.

While the initial curation may align with specific OSAI principles or **OSAI Recommendations**, the structure allows the components listed here to be mapped or repurposed according to different sets of guidelines or perspectives. We acknowledge that there is no single, perfect set of AI best practice recommendations, and diverse global viewpoints exist. This list aims to support these varied efforts by providing a central, collaboratively curated foundation of AI sharing relevant tools, resgistries, metadata, and practices.

---

The list data is maintained in human-readable Tab-Separated Values (`.tsv`) files within the `/data` directory. These files are automatically converted to JSON format for easy consumption by websites and applications.

> [!NOTE]
> This list is under active development and curation. Contributions and suggestions are highly encouraged!

## Contributing

We welcome contributions to help grow and maintain this resource. The **OSAI Ecosystem Components List** relies on community input and updates to remain valuable.

The contribution process is designed to be straightforward:

1.  **Edit the TSV:** Locate the `ecosystem_components.tsv` file in the `/data` directory. Add your component or modify existing lines.
2.  **Submit a Pull Request (PR):** Propose your changes via a GitHub Pull Request. Please use the provided PR template to describe your contribution.
3.  **Review:** The project maintainers will review your submission for relevance, accuracy, and formatting.
4.  **Merge & Convert:** Once approved, your changes will be merged into the main `ecosystem_components.tsv` file. The updated JSON file will be automatically generated shortly thereafter.

After contributing:
1.  **JSON Generation:** The `ecosystem_components.tsv` file (in `/data`) will be automatically converted to a web-reusable JSON format (e.g., for use in other resources). The generated JSON will be made available with versioning.
2.  **Hosted Online:** The JSON will be used to populate the **OSAI Ecosystem Components List** on [https://dome-ml.org/ai-ecosystem](https://dome-ml.org/ai-ecosystem).

**Please see our [Contribution Guidelines](CONTRIBUTING.md) for detailed instructions on formatting entries and the PR process.**

The OSAI project is maintained by the **project maintainers**, who review contributions and manage the repository.

## License

The content of this list (the data in TSV and generated JSON files) is licensed under the **Creative Commons Attribution 4.0 International (CC BY 4.0)** license.

Information about the license can be found in [LICENSE.md](LICENSE.md). By contributing, you agree that your contributions will be licensed under CC BY 4.0.

## Citation

If you use this list in your work, please cite it. We recommend using the `CITATION.cff` file in the repository root for standardized citation information.

*Recommended Citation:*

See [CITATION.cff](CITATION.cff) 

## Code of Conduct

All participants are expected to adhere to the project's [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure you are familiar with its contents.

## Contact

For questions, suggestions, or to report issues, please open an [Issue](https://github.com/gavinf97/OSAI_ecosystem]/issues) in this repository, or contact the **primary maintainer** at **gavinmichael.farrell@studenti.unipd.it**.

## Acknowledgements – RSQkit & RDMkit

This repository's structure and documentation approach draw inspiration from, and adapt elements of, the excellent work done by the [Research Software Quality Kit (RSQKit)](https://github.com/EVERSE-ResearchSoftware/RSQKit) and ELIXIR's [Research Data Management Kit (RDMKit)](https://rdmkit.elixir-europe.org/).
