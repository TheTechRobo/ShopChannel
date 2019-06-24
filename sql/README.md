# ShopChannel
"Open your shop." We said. "Stop having it be closed."

## SQL file information
This folder contains the SQL files for setting up a database.

- `main.sql` - (required) Main table structure of the database.
- `example.sql` - Example and placeholder database data primarily used for testing and development purposes.

## Export options
The file `main.sql` is generated using Adminer's database export function using the following options:

<table>
	<tr>
		<th>Output</th>
		<td>save</td>
	</tr><tr>
		<th>Format</th>
		<td>SQL</td>
	</tr><tr>
		<th>Database</th>
		<td>(blank)</td>
			<td>✓ Routines ✓ Events</td>
	</tr><tr>
		<th>Tables</th>
		<td>DROP+CREATE</td>
			<td>✘ Auto Increment ✓ Triggers</td>
	</tr><tr>
		<th>Data</th>
		<td>INSERT</td>
	</tr>
</table>
<table><tr><th>✓ Tables</th><th>Data ✘</th></tr></table>

(✓ is a checked checkbox, ✘ is an unchecked checkbox)