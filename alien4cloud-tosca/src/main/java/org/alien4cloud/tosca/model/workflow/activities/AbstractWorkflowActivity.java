package org.alien4cloud.tosca.model.workflow.activities;

/**
 * A workflow activity defines an operation to be performed in a TOSCA workflow. Activities allows to:
 * <ul>
 * <li>Delegate the workflow for a node expected to be provided by the orchestrator</li>
 * <li>Set the state of a node</li>
 * <li>Call an operation defined on a TOSCA interface of a node, relationship or group</li>
 * <li>Inline another workflow defined in the topology (to allow reusability)</li>
 * </ul>
 */
public abstract class AbstractWorkflowActivity {
}