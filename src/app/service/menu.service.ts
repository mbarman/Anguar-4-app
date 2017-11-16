import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class MenuService implements OnInit {

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }
  private path: any = '';
  private pathArray: any = [];
  private activeItem: String = '';
  private filteredSubMenuItems: any = false;
  private filteredMainMenuItems: any = false;

  private helpLinks: any = {
    'index': 'help/index.html',
    'ingestion': 'help/md_content_v_bedrock_ingestion.html',
    'workflow': 'help/md_content_vi_bedrock_workflow.html',
    'metadata': 'help/md_content_vii_bedrock_metadata.html',
    'queryEngine': 'help/md_content_viii_bedrock_querybuilder.html',
    'dataQuality': 'help/md_content_x_bedrock_dataquality.html',
    'reporting': 'help/md_content_xi_bedrock_reporting.html',
    'admin': 'help/md_content_iv_bedrock_administration.html'
  };


  private primaryMenuItems: any = [
    {
      'class': 'home',
      'key': '',
      'title': 'Home',
      'href': '/',
      'subtitle': 'View Inventory',
      'subMenu': [
        {
          'class': 'list',
          'href': '',
          'key': 'dashboard',
          'title': 'Dashboard',
          'access': ['view_dashboard'],
          'module': 'reporting'
        },
        {
          'class': 'list',
          'href': 'home/dashboard-list',
          'key': 'dashboard-list',
          'title': 'List Dashboards',
          'access': ['view_dashboard'],
          'module': 'reporting'
        },
        {
          'class': 'inventory',
          'href': 'home/inventory',
          'key': 'inventory',
          'title': 'Analyze Inventory'
        },
        {
          'isExternalLink': true,
          'href': this.helpLinks.index,
          'title': 'Help'
        }
      ]
    },
  ];

  private mainMenuItems: any = [
    {
      'class': 'home',
      'key': '',
      'title': 'Home',
      'href': '/',
      'subtitle': 'View Inventory',
      'subMenu': [
        {
          'class': 'list',
          'href': '',
          'key': 'dashboard',
          'title': 'Dashboard',
          'access': ['view_dashboard'],
          'module': 'reporting'
        },
        {
          'class': 'list',
          'href': 'home/dashboard-list',
          'key': 'dashboard-list',
          'title': 'List Dashboards',
          'access': ['view_dashboard'],
          'module': 'reporting'
        },
        {
          'class': 'inventory',
          'href': 'home/inventory',
          'key': 'inventory',
          'title': 'Analyze Inventory'
        },
        {
          'isExternalLink': true,
          'href': this.helpLinks.index,
          'title': 'Help'
        }
      ]
    },
    {
      'class': 'ingestion',
      'key': 'ingestion',
      'title': 'Ingest',
      'href': 'ingestion/ingest-history',
      'subtitle': 'Define File & Streaming Ingestions',
      'subMenu': [
        {
          'class': 'ingestion-ingest-history',
          'href': 'ingestion/ingest-history',
          'key': 'ingest-history',
          'title': 'View Ingest History',
          'module': 'common_authorization',
          'access': ['common_permission'],
          'context': 'global'
        },
        {
          'class': 'ingestion-ingest-history',
          'href': 'ingestion/connections-listing',
          'key': 'connections-listing',
          'title': 'List Connections',
          'module': 'ingestion',
          'access': ['ingestion_manage_connection'],
          'context': 'project'
        },
        {
          'class': 'ingestion-ingest-history',
          'href': 'ingestion/define-connection',
          'key': 'define-connection',
          'title': 'Define Connection',
          'module': 'ingestion',
          'access': ['ingestion_manage_connection'],
          'context': 'project'
        },
        {
          'class': 'ingestion-define',
          'href': 'ingestion/define/landing-zone/list',
          'key': 'landing-zone',
          'title': 'Define File Ingest',
          'module': 'ingestion',
          'access': ['ingestion_view_landing_zone_servers',
            'ingestion_view_file_patterns',
            'ingestion_view_landing_zone_directory'],
          'context': 'project'
        },
        {
          'class': 'ingestion-define',
          'href': 'ingestion/define/landing-zone-flume/list',
          'key': 'landing-zone-flume',
          'title': 'Define Streaming Ingest',
          'module': 'ingestion',
          'access': ['ingestion_view_landing_zone_servers',
            'ingestion_view_file_patterns',
            'ingestion_view_landing_zone_directory'],
          'context': 'project'
        },
        {
          'class': 'data-detection',
          'href': 'ingestion/data-detection/profile-list',
          'key': 'data-detection',
          'title': 'Automated Data Inventory',
          'module': 'ingestion',
          'access': ['ingestion_view_automated_data_inventory'],
          'context': 'global'
        },
        {
          'isExternalLink': true,
          'href': this.helpLinks.ingestion,
          'title': 'Help'
        }

      ]
    },
    {
      'class': 'workflow',
      'key': 'workflow-list',
      'title': 'Prepare',
      'href': 'workflow-list/listing/workflow-listing',
      'subtitle': 'Define Workflows & Transformations',
      'subMenu': [
        {
          'class': 'workflow-search',
          'href': 'workflow-list/listing/workflow-listing',
          'key': 'workflow-listing',
          'title': 'List Workflows',
          'access': ['wf_view_workflows'],
          'module': 'workflow',
          'context': 'project'
        },
        {
          'class': 'workflow-design',
          'href': 'workflow-list/design/workflow',
          'key': 'workflow',
          'title': 'Define Workflow',
          'access': ['wf_manage_workflows'],
          'module': 'workflow',
          'context': 'project'
        },
        {
          'class': 'workflow-search',
          'href': 'workflow-list/listing/transformation-listing',
          'key': 'transformation-listing',
          'title': 'List Transformations',
          'access': ['wf_view_workflows'],
          'module': 'workflow',
          'context': 'project'
        },
        {
          'class': 'workflow-design',
          'href': 'workflow-list/design/transformation',
          'key': 'transformation',
          'title': 'Define Transformation',
          'access': ['wf_manage_workflows'],
          'module': 'workflow',
          'context': 'project'
        },
        {
          'class': 'custom-function', // Class to add with this list item. Separate classes with a space " "
          'href': 'workflow-list/custom-function', // href link
          'key': 'custom-function', // This will be the value returned by menuService.getUrlParts(1)
          'title': 'List Functions', // Item title
          'access': ['wf_manage_workflows'],
          'module': 'workflow',
          'context': 'global'
        },
        {
          'class': 'custom-function', // Class to add with this list item. Separate classes with a space " "
          'href': 'workflow-list/custom-function/create-custom-function', //  href link
          'key': 'create-custom-function', // This will be the value returned by menuService.getUrlParts(1)
          'title': 'Define Function', // Item title
          'access': ['wf_manage_workflows'],
          'module': 'workflow',
          'context': 'global'
        },
        {
          'class': 'category-config',
          'href': 'workflow-list/category-config',
          'key': 'category-config',
          'title': 'List & Define Categories',
          'module': 'workflow',
          'access': ['wf_view_workflows'],
          'context': 'global'
        },
        {
          'class': 'workflow-schedule',
          'href': 'workflow-list/schedule',
          'key': 'schedule',
          'title': 'Schedule Workflows',
          'module': 'workflow',
          'access': ['wf_execute_workflows'],
          'context': 'global'
        },
        {
          'class': 'workflow-monitor',
          'href': 'workflow-list/monitor/running',
          'key': 'monitor',
          'title': 'Monitor Workflows',
          'module': 'workflow',
          'access': ['wf_view_workflows'],
          'context': 'global',
          'subMenu': [
            {
              'class': 'running',
              'href': 'workflow-list/monitor/running',
              'key': 'running',
              'title': 'Running',
              'module': 'workflow',
              'access': ['wf_view_workflows']
            },
            {
              'class': 'queued',
              'href': 'workflow-list/monitor/queued',
              'key': 'queued',
              'title': 'Queued',
              'module': 'workflow',
              'access': ['wf_view_workflows']
            },
            {
              'class': 'completed',
              'href': 'workflow-list/monitor/completed',
              'key': 'completed',
              'title': 'Completed',
              'module': 'workflow',
              'access': ['wf_view_workflows']
            }
          ]
        },
        {
          'isExternalLink': true,
          'href': this.helpLinks.workflow,
          'title': 'Help'
        }
      ]
    },
    {
      'class': 'metadata-search',
      'key': 'metadata-search',
      'title': 'Metadata',
      'href': 'metadata-search/entity-type/entity-type-list',
      'subtitle': 'Define Metadata',
      'subMenu': [
        {
          'class': 'entity-type',
          'href': 'metadata-search/entity-type/entity-type-list',
          'key': 'entity-type-list',
          'title': 'List Entities',
          'access': ['md_view_entity_type'],
          'module': 'metadata',
          'context': 'project'
        },
        {
          'class': 'entity-type',
          'href': 'metadata-search/entity-type/create-entity-type',
          'key': 'create-entity-type',
          'title': 'Define Entity',
          'access': ['md_manage_entity_type'],
          'module': 'metadata',
          'context': 'project'
        },
        {
          'class': 'hcatalog-configuration',
          'href': 'metadata-search/hcatalog-configuration',
          'key': 'hcatalog-configuration',
          'title': 'Map Data Types',
          'access': ['md_manage_metadata_config'],
          'module': 'metadata',
          'context': 'project'
        },
        {
          'class': 'entity-instance',
          'href': 'metadata-search/entity-instance',
          'key': 'entity-instance',
          'title': 'Populate Managed Entities',
          'access': ['md_view_entity_instance'],
          'module': 'metadata',
          'context': 'project'
        },
        {
          'class': 'managed-list',
          'href': 'metadata-search/managed-list',
          'key': 'managed-list',
          'title': 'View Managed List',
          'access': ['md_manage_managed_list'],
          'module': 'metadata',
          'context': 'project'
        },
        {
          'isExternalLink': true,
          'title': 'Help'
        }
      ]
    },
    {
      'class': 'dq',
      'key': 'dq',
      'title': 'Quality',
      'href': 'dq/rule-listing',
      'subtitle': 'Define Rules & Analyze Quality',
      'subMenu': [
        {
          'class': 'rule-listing',
          'href': 'dq/rule-listing',
          'alias': ['rule-set-listing'],
          'key': 'rule-listing',
          'access': ['dq_view_rule'],
          'module': 'data_quality',
          'context': 'global'
        },
        {
          'class': 'rule-listing',
          'href': 'dq/rule-listing/create-rule',
          'alias': ['rule-set-listing'],
          'key': 'create-rule',
          'title': 'Define Rule',
          'access': ['dq_view_rule'],
          'module': 'data_quality',
          'context': 'global'
        },
        {
          'class': 'rule-set-listing',
          'href': 'dq/rule-set-listing',
          'alias': ['rule-set-listing'],
          'key': 'rule-set-listing',
          'title': 'List Rule Sets',
          'access': ['dq_view_rule'],
          'module': 'data_quality',
          'context': 'global'
        },
        {
          'class': 'rule-set-listing',
          'href': 'dq/rule-set-listing/create-rule-set',
          'alias': ['rule-set-listing'],
          'key': 'create-rule-set',
          'title': 'Define Rule Set',
          'module': 'data_quality',
          'context': 'global'
        },
        {
          'class': 'custom-function',
          'href': 'dq/custom-function',
          'key': 'custom-function',
          'title': 'List Functions',
          'access': ['dq_view_rule'],
          'module': 'data_quality',
          'context': 'global'
        },
        {
          'class': 'custom-function',
          'href': 'dq/custom-function/create-custom-function',
          'key': 'create-custom-function',
          'title': 'Define Function',
          'access': ['dq_view_rule'],
          'module': 'data_quality',
          'context': 'global'
        },
        {
          'class': 'report-creation',
          'href': 'dq/report-creation',
          'key': 'report-creation',
          'title': 'Analyze Data Quality',
          'access': ['dq_view_rule'],
          'module': 'data_quality',
          'context': 'global'
        },
        {
          'isExternalLink': true,
          'title': 'Help'
        }
      ]
    },
    {
      'class': 'admin',
      'key': 'admin',
      'displayTitle': 'Administration',
      'title': 'Administration',
      'href': 'admin/user-admin/bedrock-users',
      'subtitle': 'Administer Bedrock',
      'subMenu': [
        {
          'class': 'user-admin',
          'href': 'admin/user-admin/bedrock-users',
          'key': 'user-admin',
          'title': 'Users',
          'access': ['admin_view_users'],
          'module': 'admin',
          'context': 'global',
          'subMenu': [
            {
              'class': 'bedrock-users',
              'href': 'admin/user-admin/bedrock-users',
              'key': 'bedrock-users',
              'title': 'List Users',
              'module': 'admin',
              'access': ['admin_view_users'],
              'context': 'global'
            },
            {
              'class': 'roles-permissions',
              'href': 'admin/user-admin/roles-permissions',
              'key': 'roles-permissions',
              'title': 'Roles',
              'module': 'admin',
              'access': ['admin_manage_users'],
              'context': 'global'
            },
            {
              'class': 'ldap-configuration',
              'href': 'admin/user-admin/ldap-configuration',
              'key': 'ldap-configuration',
              'title': 'LDAP Configuration',
              'module': 'admin',
              'access': ['admin_manage_users'],
              'context': 'global'
            },
            {
              'class': 'logged-in-user',
              'href': 'admin/user-admin/logged-in-user',
              'key': 'logged-in-user',
              'title': 'Logged In Users',
              'module': 'admin',
              'access': ['admin_manage_users'],
              'context': 'global'
            },
            {
              'class': 'audit-trail',
              'href': 'admin/user-admin/audit-trail',
              'key': 'audit-trail',
              'title': 'Audit Trail',
              'module': 'admin',
              'access': ['admin_manage_users'],
              'context': 'global'
            }
          ]
        },
        {
          'class': 'system-config',
          'href': 'admin/system-config',
          'key': 'system-config',
          'title': 'System',
          'access': ['admin_view_system_configuration'],
          'module': 'admin',
          'context': 'global'
        },
        {
          'class': 'namespace-config',
          'href': 'admin/namespace-config/bedrock-namespace-config',
          'key': 'namespace-config',
          'title': 'Namespace',
          'module': 'common_authorization',
          'access': ['common_permission'],
          'context': 'global'
        },
        {
          'class': 'notification-admin',
          'href': 'admin/notification-admin',
          'key': 'notification-admin',
          'title': 'Notifications',
          'access': ['admin_view_notification', 'admin_manage_distribution_list'],
          'module': 'admin',
          'context': 'global',
          'subMenu': [
            {
              'class': 'distribution-list',
              'href': 'admin/notification-admin/distribution-list',
              'key': 'distribution-list',
              'title': 'Distribution List',
              'module': 'admin',
              'access': ['admin_manage_distribution_list'],
              'context': 'global'
            },
            {
              'class': 'notification-templates',
              'href': 'admin/notification-admin/notification-templates',
              'key': 'notification-templates',
              'title': 'Notification Templates',
              'module': 'admin',
              'access': ['admin_view_notification'],
              'context': 'global'
            }
          ]
        },
        {
          'class': 'service-monitor',
          'href': 'admin/service-monitor',
          'key': 'service-monitor',
          'title': 'Service Monitor',
          'access': ['admin_view_process_monitor'],
          'module': 'admin',
          'context': 'global'
        },
        {
          'class': 'capacity-scheduler',
          'href': 'admin/capacity-scheduler',
          'key': 'capacity-scheduler',
          'title': 'Capacity Scheduler',
          'access': ['admin_view_system_configuration'],
          'module': 'admin',
          'context': 'global'
        },
        {
          'class': 'project-admin',
          'href': 'admin/project-admin/project-administration',
          'key': 'project-admin',
          'title': 'Projects',
          'access': ['admin_view_project'],
          'module': 'admin',
          'context': 'global'
        },
        {
          'class': 'export-import',
          'href': 'admin/export-import/export',
          'key': 'export-import',
          'title': 'Export/Import',
          'access': ['admin_import_data', 'admin_export_data'],
          'module': 'admin',
          'context': 'global',
          'subMenu': [
            {
              'class': 'ei-export',
              'href': 'admin/export-import/export',
              'key': 'export',
              'title': 'Export',
              'access': ['admin_export_data'],
              'module': 'admin',
              'context': 'global'
            },
            {
              'class': 'ei-import',
              'href': 'admin/export-import/import',
              'key': 'import',
              'title': 'Import',
              'access': ['admin_import_data'],
              'module': 'admin',
              'context': 'global'
            }
          ]
        },
        {
          'class': 'cluster-connection-management',
          'href': 'admin/cluster-connection-management/cluster-information',
          'key': 'cluster-connection-management',
          'title': 'Cluster Connection Management',
          'access': ['admin_view_cluster_connection'],
          'module': 'admin',
          'context': 'global',
          'subMenu': [
            {
              'class': 'cluster-information',
              'href': 'admin/cluster-connection-management/cluster-information',
              'key': 'cluster-information',
              'title': 'Connected Clusters',
              'access': ['admin_view_cluster_connection'],
              'module': 'admin',
              'context': 'global'
            },
            {
              'class': 'cluster-history',
              'href': 'admin/cluster-connection-management/cluster-history',
              'key': 'cluster-history',
              'title': 'Disconnected Clusters',
              'access': ['admin_view_cluster_connection'],
              'module': 'admin',
              'context': 'global'
            }
          ]
        },
        {
          'class': 'dlm',
          'href': 'admin/dlm-admin/policy-list',
          'key': 'dlm-admin',
          'title': 'Data Lifecycle Management',
          'access': ['admin_manage_dlm'],
          'module': 'admin'
        },
        {
          'isExternalLink': true,
          'title': 'Help'
        }
      ]
    }
  ];

  private userMenu: any = [
    {
      'class': 'user-profile',
      'href': 'user',
      'key': 'user',
      'title': 'User Details',
      'context': 'global'

    },
    {
      'class': 'change-password',
      'href': 'user/change-password',
      'key': 'change-password',
      'title': 'Change Password',
      'context': 'global'
    },
    {
      'class': 'logout',
      'href': 'logout',
      'key': 'logout',
      'title': 'Logout',
      'context': 'global'
    }
  ];

  ngOnInit() {
// this.callPermissionService();
  }

  public getMainMenu(): any {
    return this.mainMenuItems;
  }

  private getProjectId(): string {
    const projectId: any = 1;
    const id: any = this._activatedRoute.snapshot.paramMap.get('projectId');
    if (id !== undefined && (/^\d+$/).test(id)) {
      return id;
    }
    return projectId;
  }

  private getProjectPrefix(): string {
    return 'projects/' + this.getProjectId();
  }

  private addProjectContext(url: string): string {
    let newUrl = (url.indexOf('/') === 0) ? url.substr(1) : url;
    if (!(/^projects\/\d+\//).test(newUrl)) {
      newUrl = this.getProjectPrefix() + '/' + newUrl;
    }
    if (url.indexOf('/') === 0) {
      newUrl = '/' + newUrl;
    }
    return newUrl;
  }

  private getUrlParams(): any {
    let qParams: any;
    this._activatedRoute
      .queryParams
      .subscribe(params => {
        qParams = params;
      });

    return qParams;
  }
}
