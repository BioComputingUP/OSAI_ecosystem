import os
import yaml
with open(os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'assets', 'ecosystem_components_list.yml')), 'r') as f:
    yaml.safe_load(f)