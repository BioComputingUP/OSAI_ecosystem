# OSAI: Open and Sustainable AI Ecosystem Components

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15391273.svg)](https://doi.org/10.5281/zenodo.15391273) 

Welcome to the Open and Sustainable AI (OSAI) Ecosystem Catalog! This repository hosts a community-curated list of components relevant to building and utilizing AI in ways that are transparent, fair, accessible, and environmentally conscious.

Our goal is to provide a central resource for discovering tools, datasets, models, frameworks, research, best practices, organizations, and educational materials aligned with OSAI principles. This catalog is intended for researchers, developers, policymakers, educators, students, and anyone interested in the field of open and sustainable AI.

---

## Project Background and Purpose

This catalog originates as a publication and curated resource from the **ELIXIR Machine Learning Focus Group**. It represents a collective effort to identify and organize key components supporting Open and Sustainable AI (OSAI) practices within the life sciences and beyond.

**Digital Object Identifier (DOI):** *[Space reserved for DOI - e.g., https://doi.org/...]*

The primary goal of this catalog is to serve as a dynamic, community-maintained inventory. It is explicitly **designed for reuse and adaptation**. We envision this list feeding into various resources, frameworks, and platforms, providing a long-term, accessible collection of OSAI ecosystem components.

While the initial curation may align with specific OSAI principles or recommendations, the structure allows for the components listed here to be mapped or re-purposed according to different sets of guidelines or perspectives. We acknowledge that there is no single, perfect set of recommendations for OSAI, and diverse global viewpoints exist. This catalog aims to support these varied efforts by providing a central, collaboratively curated foundation of relevant tools, data, models, and practices.

---

The catalog data is maintained in human-readable Tab-Separated Values (`.tsv`) files within the `/data` directory. These files are automatically converted to JSON format for easy consumption by websites and applications.

> [!NOTE]
> This catalog is under active development and curation. Contributions and suggestions are highly encouraged!


## Contributing

We welcome contributions to help grow and maintain this resource. The OSAI ecosystem components relies on community input and updating to remain of value.

The contribution process is designed to be straightforward:

1.  **Edit the TSV:** Identify the `ecosystem_components.tsv` file in the `/data` directory for your component and add or modify the relevant line(s).
2.  **Submit a Pull Request (PR):** Propose your changes via a GitHub Pull Request. Please use the provided PR template to describe your contribution.
3.  **Review:** The project maintainers will review your submission for relevance, accuracy, and formatting.
4.  **Merge & Convert:** Once approved, your changes will be merged into the main `ecosystem_components.tsv` file. The updated JSON file will be automatically generated shortly after.

After contributing:
1. **JSON Generation** The TSV will be converted automatically for web reusable JSON for example in other resources and made available with versioning under `ecosystem_components.tsv` file in the `/data`.
2. **Hosted online** The JSON will be used to feed the OSAI Ecosystem Components list on https://dome-ml.org/ai-ecosystem

**Please see our [Contribution Guidelines](CONTRIBUTING.md) for detailed instructions on formatting entries and the PR process.**

The OSAI project is maintained by the **Project Team**, who review contributions and manage the repository.

## License

The content of this catalog (the data in TSV and generated JSON files) is licensed under the **Creative Commons Attribution 4.0 International (CC BY 4.0)** license.

Information about the license can be found in [LICENSE.md](LICENSE.md). By contributing, you agree that your contributions will be licensed under CC BY 4.0.

## Citation

If you use this catalog in your work, please cite it. We recommend creating a `CITATION.cff` file in the repository root for standardized citation information.

*Placeholder Citation (update once finalized, possibly via CITATION.cff and Zenodo):*
> OSAI Community Contributors. (2025). *OSAI: Open and Sustainable AI Ecosystem Catalog*. GitHub Repository. https://github.com/gavinf97/OSAI_ecosystem

See [CITATION.cff](CITATION.cff) (once created).

## Code of Conduct

All participants are expected to adhere to the project's [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure you are familiar with its contents.

## Contact

For questions, suggestions, or to report issues, please open an [Issue](https://github.com/[your-username]/OSAI/issues) *(Replace with actual URL)* in this repository, or contact the maintainers at **gavinmichael.farrell@studenti.unipd.it**.

## Acknowledgements - RSQkit & RDMkit

This repostiories structure and documentation approach draws direct inspiration and code from the excellent work done by the [Research Software Quality Kit (RSQKit)](https://github.com/EVERSE-ResearchSoftware/RSQKit) and ELIXIR's [Research Data Management Kit (RDMKit)](https://rdmkit.elixir-europe.org/).
